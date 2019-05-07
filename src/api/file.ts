import * as FileModel from '@/models/interfaces/file';
import Handler from '@/utilities/api-handler.lib';

export default {
    /**
     * 1. Upload File
     */
    async uploadFile(fileName: string, file: string): Promise<FileModel.IFile|any> {
        const config = {
            url: '/file',
            method: 'post',
            data: { file, fileName }
        };
        // let data!: FileModel.IFile;
        // Handler.request<FileModel.IFile>(config)
        //     .then(res => {
        //         data = <FileModel.IFile>res.data;
        //     });
        // return data;
    },
    /**
     * 2. Get File
     */
    async getFile(fildId: string): Promise<FileModel.IFile|any> {
        const config = {
            url: `/file/${fildId}`,
            method: 'get'
        };
        // let data!: FileModel.IFile;
        // Handler.request<FileModel.IFile>(config)
        //     .then(res => {
        //         data = <FileModel.IFile>res.data;
        //     });
        // return data;
    },
};