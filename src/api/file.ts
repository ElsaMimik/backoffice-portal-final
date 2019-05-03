import * as Model from '@/models/interfaces/member';
import Handler from '@/utilities/api-handler.lib';

export default {
    /**
     * 1. Upload File
     */
    async uploadFile(fileName: string, file: string): Promise<Model.IFile> {
        const config = {
            url: '',
            method: 'post'
        };
        let data!: Model.IFile;
        Handler.request<Model.IFile>(config)
            .then(res => {
                data = <Model.IFile>res.data;
            });
        return data;
    },
    /**
     * 2. Get File
     */
    async getFile(fildId: string): Promise<Model.IFile> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.IFile;
        Handler.request<Model.IFile>(config)
            .then(res => {
                data = <Model.IFile>res.data;
            });
        return data;
    },
};