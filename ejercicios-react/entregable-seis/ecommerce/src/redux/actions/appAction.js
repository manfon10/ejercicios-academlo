export const appAction = {
    setIsLoading: 'SET_IS_LOADING',
    setAlertLoading: 'SET_ALERT_LOADING'
}

export const setIsLoading = isLoading => ({
    type: appAction.setIsLoading,
    payload: isLoading
});

export const setAlertLoading = isLoading => ({
    type: appAction.setAlertLoading,
    payload: isLoading
});