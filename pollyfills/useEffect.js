useMyEffect(() => {}, []);

export function useMyEffect(cb, dependency = []) {
    let firstRef = useRef(true);
    let dependencyRef = useRef([]);

    //mounting
    if(firstRef.current) {
        firstRef.current = false;
        const cleanup = cb();
        return ()  => {
            cleanup && cleanup()
        }
    }

    //updation
    if(JSON.stringify(dependency) == JSON.stringify(dependencyRef.current)) {
        const cleanup = cb();
        return ()  => {
            cleanup && cleanup()
        }
    }



    // no dependency passed
    if(!dependency) {
        const cleanup = cb();
        return ()  => {
            cleanup && cleanup()
        }
    }

    // setting the dependency
    dependencyRef.current = dependency ? dependency : [];
}

