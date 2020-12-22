import { FileData } from './types'

export interface FileSystem {
    workingDirectory: string
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

    listDirectory(path?: string): FileData[] {
        return this.files
    }

    changeDirectory(path?: string): boolean {
        return true
    }
}
