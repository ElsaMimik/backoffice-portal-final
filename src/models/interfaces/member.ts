import { MemberStatus } from '@/models/status/member'

export interface IMemberResponse {
    uuid: string,
    name: string,
    status: MemberStatus,
}