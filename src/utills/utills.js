
export const filterFrames = (framesArr) => {
  let result = []
  framesArr.forEach((item) => {
    item.idOverlap = [item.id]
    let sameSizeInResult = result.find((resultItem) => {
      return item.frameSize === resultItem.frameSize && item.size === resultItem.size
    })

    if (sameSizeInResult) {
      sameSizeInResult.idOverlap.push(item.id)
    }
    else {
      result.push(item);
    }
  })
  return result;
}


export const filterFramesReduce = (framesArr) => {
  return framesArr.reduce((res, item) => {
    item.idOverlap = [item.id]
    let sameSizeInResult = res.find((resultItem) => {
      return item.frameSize === resultItem.frameSize && item.size === resultItem.size
    })
    if (sameSizeInResult) {
      sameSizeInResult.idOverlap.push(item.id)
    }
    else {
      res.push(item);
    }
    return res
  }, [])
}