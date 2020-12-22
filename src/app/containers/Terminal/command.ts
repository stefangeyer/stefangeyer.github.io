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
            // Comment
            return true
        } else if (label.startsWith('./')) {
            const path = label.replace(/\.\//g, '')
            const file = this.fileSystem.accessFile(path)
            if (file == null) return `${label}: No such file or directory`
            if (!file.executable) return `${label}: File is not executable`
            return { type: ResultType.EXECUTE, payload: file }
        } else if (label === 'ls') {
            if (args.length > 0) return 'ls does not support arguments yet'
            const files: FileData[] = this.fileSystem.listDirectory()
            return { type: ResultType.LS, payload: files }
        } else if (label === 'pwd') {
            return this.fileSystem.workingDirectory
        } else if (label === 'cat') {
            if (args.length === 0) return 'Usage: cat <file>'
            const file = this.fileSystem.accessFile(args[0])
            if (file == null) return `${label}: No such file or directory`
            return { type: ResultType.CAT, payload: file }
        } else if (label === 'theme') {
            if (
                args.length === 0 ||
                !['system', 'light', 'dark'].includes(args[0])
            )
                return 'Usage: theme <system|light|dark>'
            const value = args[0] as ThemeKeyType
            return { type: ResultType.THEME, payload: value }
        } else if (label === 'lang') {
            if (args.length === 0 || !['en', 'de'].includes(args[0]))
                return 'Usage: lang <en|de>'
            return { type: ResultType.LANG, payload: args[0] as string }
        }
        return false
    }
}
