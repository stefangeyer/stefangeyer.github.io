import * as React from 'react'
import { ParseResult } from './types'
import { Default, Executable } from './components/File'
import { ThemeKeyType } from 'styles/theme/types'
import { ThemeSwitch } from './components/ThemeSwitch'

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
    onCommand(label: string, args: string[]): ParseResult {
        if (label.startsWith('#')) {
            return true
        } else if (label.startsWith('./')) {
            return './ not implemented yet :('
        } else if (label === 'ls') {
            return (
                <span>
                    <Default>education.txt</Default>{' '}
                    <Default>experience.txt</Default>{' '}
                    <Executable>fetch_projects</Executable>
                </span>
            )
        } else if (label === 'pwd') {
            return '/home/stefan'
        } else if (label === 'theme') {
            if (
                args.length === 0 ||
                !['system', 'light', 'dark'].includes(args[0])
            )
                return 'Usage: theme <system|light|dark>'
            const value = args[0] as ThemeKeyType
            return <ThemeSwitch value={value}></ThemeSwitch>
        }
        return false
    }
}
