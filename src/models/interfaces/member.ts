import * as Status from '@/models/status/member';
import { IFile } from './file';

export interface IMembersResponse {
	members: IMember[];
}
export interface IMember {
	uuid: string;
	riskControlLevel: Status.RiskControllLevel;
	isBlacklisting: boolean;
	amount: number;
	freezeAmount: number;
	accountStatus: Status.AccountStatus;
	withdrawalStatus: Status.WithdrawalStatus;
	createDate: number;
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
	isBlacklisting: boolean;
	riskControlLevelCreateDate: number;
	blacklistingCreateDate: number;
	amount: number;
	freezeAmount: number;
	securityBoxAmount: number;
	withdrawalLimitAmount: number;
	availableWithdrawalLimitAmount: number;
	turnoverAmount: number;
	turnoverAmountCreateDate: number;
	accountStatus: Status.AccountStatus;
	withdrawalStatus: Status.WithdrawalStatus;
	isBigWin: boolean;
	bigWinCreateDate: number;
	isSettled: boolean;
	settleStatus: Status.SettleStatus;
}

export interface IMemberStatusRequest {
	accountAction: Status.AccountStatus;
	withdrawalAction: Status.WithdrawalStatus;
	reason: string;
	files: string[];
}

export interface IMemberStatusResponse {
	histories: IMemberStatusHistory[];
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

export interface ILoginHistoryResponse {
	histories: ILoginHistory[];
}

interface ILoginHistory {
	createDate: string;
	ip: string;
	isSuccess: Status.YesNo;
	loginType: Status.LoginType;
}

export interface IRelationLoginHistoryResponse {
	relations: IRelationLogin[];
}

export interface IRelationLogin {
	uuid: string;
	createDate: number;
	ip: string;
	isSuccess: boolean;
	loginType: Status.LoginType;
	roleCode: Status.RoleCode;
}


export interface IRiskControlResponse {
	uuid: string;
	riskControlRule: IRiskControlRule;
	depositAmount: number;
	depositCount: number;
	dailyContributionAmount: number;
	dailyWithdrawal: IRuleCheck;
	dailyTurnover: IRuleCheck;
	dailyContribution: IRuleCheck;
	sevenDaysContribution: IRuleCheck;
	riskControlRuleDepositing: IRuleCheck;
	riskControlLevelCreateDate: number;
	riskControlLevelReason: string;
	riskControlLevelCreateUser: string;
	sevenDaysTurnoverRate: number;
}
export interface IRiskControlRule {
	riskControlLevel: Status.RiskControllLevel;
	dailyWithdrawalAmount: number;
	dailyTurnoverAmount: number;
	dailyContributionAmount: number;
	sevenDaysContributionAmount: number;
	depositingAmount: number;
}
export interface IRuleCheck {
	amount: number;
	isLegal: boolean;
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