import { AccountStatus } from '@/models/status/member';

export interface ITestMemberResponse {
    uuid: string;
    name: string;
    status: AccountStatus;
}