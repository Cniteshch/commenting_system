export const emptyString = ''
export const loadingString = 'Loading...'

export const blog = {
  'title' : 'Commenting System',
  'body' : 'Select here any word and comment on that word.. Feel free to contact for any queries.... Select here any word and comment on that word.. Feel free to contact for any queries.....  Select here any word and comment on that word.. Feel free to contact for any queries..   Select here any word and comment on that word.. Feel free to contact for any queries.....Select here any word and comment on that word.. Feel free to contact for any queries..   Select here any word and comment on that word.. Feel free to contact for any queries..   Select here any word and comment on that word.. Feel free to contact for any queries..  Select here any word and comment on that word.. Feel free to contact for any queries..   Select here any word and comment on that word.. Feel free to contact for any queries.. Select here any word and comment on that word.. Feel free to contact for any queries.. Select here any word and comment on that word.. Feel free to contact for any queries.. Select here any word and comment on that word.. Feel free to contact for any queries..Select here any word and comment on that word.. Feel free to contact for any queries..  Select here any word and comment on that word.. Feel free to contact for any queries..  Select here any word and comment on that word.. Feel free to contact for any queries..  Select here any word and comment on that word.. Feel free to contact for any queries..  Select here any word and comment on that word.. Feel free to contact for any queries..'
}

export  const buttonValue = (condition, string1, string2) => {
  return condition ? string1 : string2
}
export const getSelectedData = (selectionObj) => {
  return  selectionObj.anchorNode.wholeText ? selectionObj.anchorNode.wholeText.substring(selectionObj.baseOffset, selectionObj.extentOffset) : ''
  }