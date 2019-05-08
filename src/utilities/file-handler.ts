import Vue from "vue";
import * as Model from "@/models/interfaces/file";
import FileApi from "@/api/file";

export const downloadMixin = {
	methods: {
		downloadFile(fileId: string) {
			FileApi.getFile(fileId).then((fileData) => {
				const element = document.createElement('a');
				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileData.file));
				element.setAttribute('download', fileData.fileName);
				element.style.display = 'none';
				document.body.appendChild(element);
				element.click();
				document.body.removeChild(element);
			});
		}
	},
};

export const download = (fileId: string) => {
	FileApi.getFile(fileId).then((fileData) => {
		const element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileData.file));
		element.setAttribute('download', fileData.fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	});
};

export default class FileHandlerMixin extends Vue{
	uploadedFiles: Model.IFile[] = [];
	uploadFile(evt: any) {
		const self = this;
		const f = evt.target.files[0];
		const reader = new FileReader();
		reader.onload = ((theFile) => {
			return (e: any) => {
				const binaryData = e.target.result;
				const base64String = window.btoa(binaryData);
				// call upload api ...
				FileApi.uploadFile(f.name, base64String).then((res: any) => {
					const fileId = res;
					self.uploadedFiles.push({
						fileId,
						fileName: f.name,
						file: base64String
					});
				});
			};
		})(f);
		reader.readAsBinaryString(f);
	}
}