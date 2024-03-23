export const lawyerSelector = (state) => state.lawyer;
export const lawyerIsFetchedSelector = (state) => state.lawyer.isFetched;
export const LawyerScheduleSelector = (state) => state.lawyer.schedule;
export const lawyerPaymentLeftSelector = (state) => state.lawyer.paymentLeft;
export const lawyerPaymentHistorySelector = (state) =>
  state.lawyer.paymentHistory;
export const lawyerCasesSeenSelector = (state) => state.lawyer.casesSeen;
