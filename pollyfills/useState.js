
const [val, setVal] = useMyState(0)

export const useMyState = function (initialVal) {
    let mount = false;
    let currentState;

    if(!mount) {
        mount = true;
        currentState = initialVal
    }

    return [
        currentState,
        (newState) => {
            currentState = newState;
        }
    ]
}