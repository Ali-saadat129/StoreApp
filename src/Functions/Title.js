
const Shorter = (Name) => {
    const allname = Name.split(" ")
    const Title = `  ${allname[0]} ${allname[1]} ${allname[2]} `
    return Title
}

export {Shorter}