export const addNew = (stateSetter, data) => {
    stateSetter(state => {
        return [...state, data]
    })
}

export  const remove = (stateSetter, id) => {
    stateSetter(state => {
        const cloneState = [...state];
        return cloneState.filter(item => item.id !== id)
    })
}

export const update = (stateSetter, data) => {
    stateSetter(state => {
        const cloneState = [...state];
        return cloneState.map(item => item.id === data.id ? data : item)
    })
}

