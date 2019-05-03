import * as Model from '@/models/interfaces/member';
import { AccountStatus } from '@/models/status/member';
import Handler from '@/utilities/api-handler.lib';

export default {
    testGetMember(id: string): Model.ITestMemberResponse {
        const data: Model.ITestMemberResponse = { uuid: 'employee_01', name: 'Rourou', status: AccountStatus.Normal };
        return <Model.ITestMemberResponse>(data);
    },
    async testGetMemberList(id: string): Promise<Model.ITestMemberResponse[]> {
        const config = {
            url: '/api/v1/member/profile',
            method: 'get'
        };
        interface IResponse {
            success: boolean;
        }
        Handler.request<IResponse>(config)
            .then(res => {
                // console.log(res.data.success);
            }).catch(error => {
                // console.log(error);
            });
        const data: Model.ITestMemberResponse[] = [
            { uuid: 'employee_01', name: 'Rourou', status: AccountStatus.Normal },
            { uuid: 'employee_02', name: 'Ellen', status: AccountStatus.E2 },
        ];
        return data;
    },
};