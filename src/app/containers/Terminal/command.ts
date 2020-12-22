import { FileData, ParseResult, ResultType } from './types'
import { FileSystem } from './fs'
import { ThemeKeyType } from 'styles/theme/types'

export abstract class CommandProcessor {
    process(command: string): ParseResult {
        const preprocessed = command.trim().replace(/\s+/g, ' ')
        const args = preprocessed.split(' ')
        if (args.length === 0 || args[0].length === 0) return true
        const label = args.shift() as string
        return this.onCommand(label, args)
    }
    protected abstract onCommand(label: string, args: string[]): ParseResult
}

export class StaticCommandProcessor extends CommandProcessor {
    fileSystem: FileSystem

    constructor(fileSystem: FileSystem) {
        super()
        this.fileSystem = fileSystem
    }

    onCommand(label: string, args: string[]): ParseResult {
        if (label.startsWith('#')) {
            return true
        } else if (label.startsWith('./')) {
            return './ not implemented yet :('
        } else if (label === 'ls') {
            const files: FileData[] = this.fileSystem.listDirectory()
            return { type: ResultType.LS, payload: files }
        } else if (label === 'pwd') {
            return '/home/stefan'
        } else if (label === 'theme') {
            if (
                args.length === 0 ||
                !['system', 'light', 'dark'].includes(args[0])
            )
                return 'Usage: theme <system|light|dark>'
            const value = args[0] as ThemeKeyType
            return { type: ResultType.THEME, payload: value }
        }
        return false
    }
}
