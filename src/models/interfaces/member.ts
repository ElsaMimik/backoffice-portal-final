import * as Status from '@/models/status/member';
import { IFile } from './file';

export interface IMembersResponse {
    members: IMember[];
}
export interface IMember {
    uuid: string;
    riskControlLevel: Status.RiskControllLevel;
    isBlacklisting: Status.YesNo;
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
    isBlacklisting: Status.YesNo;
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
    isBigWin: Status.YesNo;
    bigWinCreateDate: string;
    isSettled: Status.YesNo;
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

interface IMemberStatusHistory {
    createDate: string;
    csID: string;
    csName: string;
    accountAction: Status.AccountStatus;
    withdrawalAction: Status.WithdrawalStatus;
    reason: string;
    files: IFile[];
}

export interface ILoginHistoryResponse {
    history: ILoginHistory[];
}

interface ILoginHistory {
    createDate: string;
    ip: string;
    isSuccess: Status.YesNo;
    loginType: Status.LoginType;
}

export interface IRelationLoginHistoryResponse {
    relation: IRelationLogin[];
}

interface IRelationLogin {
    uuid: string;
    createDate: string;
    ip: string;
    isSuccess: Status.YesNo;
    loginType: Status.LoginType;
    roleCode: Status.RoleCode;
}


export interface IRiskControlResponse {
    uuid: string;
    riskControlRule: IRiskControlRule;
    depositAmount: string;
    depositCount: number;
    dailyContributionAmount: string;
    dailyDeposit: IRuleCheck;
    dailyTurnover: IRuleCheck;
    dailyContribution: IRuleCheck;
    sevenDaysContribution: IRuleCheck;
    riskControlRuleDepositing: IRuleCheck;
    riskControlLevelCreateDate: string;
    riskControlLevelReason: string;
    riskControlLevelCreateUser: string;
    sevenDaysTurnoverRate: string;
}
interface IRiskControlRule {
    riskControlLevel: Status.RiskControllLevel;
    dailyDepositAmount: string;
    dailyTurnoverAmount: string;
    dailyContributionAmount: string;
    sevenDaysContributionAmount: string;
    depositingAmount: string;
}
interface IRuleCheck {
    amount: string;
    isLegal: Status.YesNo;
}

export interface ITurnoverResponse {
    uuid: string;
    lastWithdrawnDate: string;
    lastdepositDate: string;
    withdrawingAmount: string;
    depositingAmount: string;
    dailyWithdrawalAmount: string;
    dailyDepositAmount: string;
    dailyTurnoverAmount: string;
    sevenDaysAccumulatedWithdrawalAmount: string;
    sevenDaysAccumulatedDepositAmount: string;
    sevenDaysAccumulatedTurnoverAmount: string;
}


export interface ITestMemberResponse {
    uuid: string;
    name: string;
    status: Status.AccountStatus;
}