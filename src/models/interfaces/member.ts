import * as Status from '@/models/status/member';


export interface IMembersResponse {
    members: IMember[];
}
export interface IMember {
    uuid: string;
    riskControlLevel: Status.RiskControllLevel;
    isBlacklisting: Status.IsSuccess;
    amount: string;
    freezeAmount: string;
    accountStatus: Status.AccountStatus;
    withdrawalStatus: Status.WithdrawalStatus;
    createDate: string;
    roleCode: Status.RoleCode;
}

export interface IMemberDetailResponse {
    uuid: string;
    nickName: string;
    createDate: string;
    currencyCode: Status.CurrencyCode;
    roleCode: Status.RoleCode;
    phoneNumber: string;
    riskControlLevel: Status.RiskControllLevel;
    isBlacklisting: Status.IsSuccess;
    riskControlLevelCreateDate: string;
    blacklistingCreateDate: string;
    amount: string;
    freezeAmount: string;
    securityBoxAmount: string;
    withdrawalLimitAmount: string;
    availableWithdrawalLimitAmount: string;
    turnoverAmount: string;
    turnoverAmountCreateDate: string;
    accountStatus: Status.AccountStatus;
    withdrawalStatus: Status.WithdrawalStatus;
    isBigWin: Status.IsSuccess;
    bigWinCreateDate: string;
    isSettled: Status.IsSuccess;
    settleStatus: Status.SettleStatus;
}

export interface IMemberStatusRequest {
    accountAction: Status.AccountStatus;
    withdrawalAction: Status.WithdrawalStatus;
    reason: string;
    files: string[];
}

export interface IMemberStatusResponse {
    history: IMemberStatusHistory[];
}

export interface IMemberStatusHistory {
    createDate: string;
    csID: string;
    csName: string;
    accountAction: Status.AccountStatus;
    withdrawalAction: Status.WithdrawalStatus;
    reason: string;
    files: IFile[];
}

export interface IFile {
    fileID: string;
    fileName: string;
}

export interface ILoginHistoryResponse {
    history: ILoginHistory[];
}

export interface ILoginHistory {
    createDate: string;
    ip: string;
    isSuccess: Status.IsSuccess;
    loginType: Status.LoginType;
}

interface IRelationLoginHistoryResponse {
    relation: IRelationLogin[];
}
interface IRelationLogin {
    uuid: string;
    createDate: string;
    ip: string;
    isSuccess: Status.IsSuccess;
    loginType: Status.LoginType;
    roleCode: Status.RoleCode;
}







export interface ITestMemberResponse {
    uuid: string;
    name: string;
    status: Status.AccountStatus;
}