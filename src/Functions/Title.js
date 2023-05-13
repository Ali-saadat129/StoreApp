
const Shorter = (Name) => {
    const allname = Name.split(" ")
    const Title = `  ${allname[0]} ${allname[1]} ${allname[2]} `
    return Title
}

export {Shorter}


const isSelected = ( state , id) => {
    const IndexOfProduct = state.Selected.findIndex(ithem => ithem.id===id)
    if (IndexOfProduct===-1) {
        return false
    }
    else{
        return true
    }}

const ProductCount = (state , id ) => {
    const IndexOfProduct = state.Selected.findIndex(ithem => ithem.id===id)
 
    if (IndexOfProduct===-1) {
        return false
    }
    else{
        return state.Selected[IndexOfProduct].quantity
    }
}

export {ProductCount}
export {isSelected}

