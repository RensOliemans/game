import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This version of Mastermind is played with letters and words, just like
        a version of the original <a
          href="https://en.wikipedia.org/wiki/Bulls_and_cows#The_word_version"
          className="underline font-bold"
        >Bulls and cows</a> game, the original inspiration of Mastermind.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/RensOliemans/mastermind-letters"
          className="underline font-bold"
        >
          Source code
        </a>{' '}
      </p>
    </BaseModal>
  )
}
