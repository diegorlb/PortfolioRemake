import { FunctionComponent, useEffect, useState, } from 'react'

type TypewritterProps = {
  words: Array<string>,
}

const Typewritter: FunctionComponent<TypewritterProps> = ({ words, }) => {
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [charIndex, setCharIndex] = useState<number>(0)

  const [blink, setBlink] = useState<boolean>(false)
  const [reverse, setReverse] = useState<boolean>(false)

  useEffect(() => {
    if ((wordIndex === words.length - 1) && (charIndex === words[wordIndex].length)) return
    if ((charIndex === words[wordIndex].length + 1) && (wordIndex !== words.length - 1) && !reverse) {
      setReverse(true)
      return
    }
    if ((charIndex === 0) && reverse) {
      setReverse(false)
      setWordIndex((prev) => prev + 1)
      return
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (reverse ? -1 : 1))
    }, Math.max(reverse ? 75 : charIndex === words[wordIndex].length ? 1000 : 150, ~(Math.random() * 350)))

    return () => clearTimeout(timeout)
  }, [charIndex, reverse, wordIndex, words])

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500)
    return () => clearTimeout(timeout)
  }, [blink])

  return (
    <>
      {words[wordIndex].substring(0, charIndex)}{blink ? '|' : ''}
    </>
  )
}

export default Typewritter