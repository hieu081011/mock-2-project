import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export const countingStars = (star) => {
    star = Number(star)
    star = (star / 0.5).toFixed()
    const fillStar = Math.floor(star / 2)
    let halfStar = 0
    if (star % 2 === 1) {
        halfStar = 1
    }
    const emptyStar = 5 - fillStar - halfStar
    const arr = []
    for (var i = 0; i < fillStar; i++) {
        arr.push(<BsStarFill />)
    }
    if (halfStar) arr.push(<BsStarHalf />)
    for (var i = 0; i < emptyStar; i++) {
        arr.push(<BsStar />)
    }
    return arr
}