const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log("The action is: ", action);
        const retValue = next(action);
        console.log("The new state is: ", store.getState());
    console.groupEnd();
    return retValue;
}

export default logger;