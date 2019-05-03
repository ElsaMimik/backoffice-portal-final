/**
 * @description 帳號狀態[兩種]: 正常(Normal), 不可登入(E2)
 * @description accountAction: 正常(Normal), 不可登入(E2)
 */
export enum AccountStatus {
  // 正常
  Normal = 'Normal',
  // 不可登入
  E2 = 'E2'
}

/**
 * @description 提現狀態[兩種]: 正常(Normal), 不可提現(E1)
 * @description withdrawalAction: 正常(Normal), 不可登入(E2)
 */
export enum WithdrawalStatus {
  // 正常
  Normal = 'Normal',
  // 不可提現
  E1 = 'E1',
}

/**
 * @description 
 */
export enum LoginType {
  Mobile = 'Mobile',
  Web = 'Web'
}

/**
 * @description 風控等級[四種]: A寬鬆,B,C,D嚴格
 */
export enum RiskControllLevel {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

/**
 * @description [一種]: 直客(Normal)
 */
export enum RoleCode {
  Normal = 'Normal',
}

/**
 * @description [一種]: 人民幣(CNY)
 */
export enum CurrencyCode {
  CNY = 'CNY',
}

/**
 * @description 注單結算狀態[兩種]正常(Normal)/異常(Abnormal)
 */
export enum SettleStatus {
  Normal = 'Normal',
  Abnormal = 'Abnormal',
}

/**
 * @description 是否("0": No, "1": Yes)
 */
export enum IsSuccess {
  No = '0',
  Yes = '1',
}