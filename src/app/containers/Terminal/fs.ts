import { FileData } from './types'

export interface FileSystem {
    workingDirectory: string
    accessFile(path: string): FileData | null
    listDirectory(path?: string): FileData[]
    changeDirectory(path?: string): boolean
}

export class MockedFileSystem implements FileSystem {
    workingDirectory: string = '/home/stefan'
    files: FileData[] = [
        { name: 'contact.txt', executable: false },
        { name: 'education.txt', executable: false },
        { name: 'experience.txt', executable: false },
        { name: 'fetch_projects', executable: true },
    ]

    accessFile(path: string): FileData | null {
        let result: FileData | null = null
        this.files.forEach(file => {
            if (file.name === path) result = file
        })
        return result
    }

    listDirectory(path?: string): FileData[] {
        return this.files
    }

    changeDirectory(path?: string): boolean {
        return true
    }
}
