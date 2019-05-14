import * as FileModel from '@/models/interfaces/file';
import Handler from '@/utilities/api-handler.lib';

export default {
	/**
	 * 1. Upload File
	 */
	async uploadFile(fileName: string, file: string): Promise<FileModel.IFile> {
		const config = {
			url: '/files',
			method: 'post',
			data: { file, fileName }
		};
		const result = await Handler.request<FileModel.IFile>(config);
		return <FileModel.IFile>(result.data);
	},
	/**
	 * 2. Get File
	 */
	async getFile(fildId: string): Promise<FileModel.IFile> {
		const config = {
			url: `/files/${fildId}`,
			method: 'get'
		};
		const result = await Handler.request<FileModel.IFile>(config);
		return <FileModel.IFile>(result.data);
	},
};