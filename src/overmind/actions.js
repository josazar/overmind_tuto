
// The actions are exported individually by giving them a name and a definition.
export const setWidth = (context, width) => {
  context.state.width = width
}

export const setHeight = (context, height) => {
  context.state.height = height
}

export const editTitle = (context, title) => {
  context.state.title = title
}
