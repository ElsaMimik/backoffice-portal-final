import * as Model from '@/models/interfaces/member';
import { MemberStatus } from '@/models/status/member';
import Handler from '@/utilities/api-handler.lib';

export default {
    getMember(id: string): Model.IMemberResponse {
        const data: Model.IMemberResponse = { uuid: 'employee_01', name: 'Rourou', status: MemberStatus.E1 };
        return <Model.IMemberResponse>(data);
    },
    async getMemberList(id: string): Promise<Model.IMemberResponse[]> {
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
        const data: Model.IMemberResponse[] = [
            { uuid: 'employee_01', name: 'Rourou', status: MemberStatus.E1 },
            { uuid: 'employee_02', name: 'Ellen', status: MemberStatus.E2 },
        ];
        return data;
    },
};