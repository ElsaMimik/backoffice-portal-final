import Vue from "vue";
import * as Model from "@/models/interfaces/file";
import FileApi from "@/api/file";

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
                    self.uploadedFiles.push({
                        fileId: "",
                        fileName: f.name,
                        file: base64String
                    });
                });
            };
        })(f);
        reader.readAsBinaryString(f);
    }
}