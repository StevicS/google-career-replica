import nextElementInList from '@/utils/nextElementInList.js'

describe(' nextElementInList', () => {
  it('locates element in list and returns the next element in list', () => {
    const list = ['a', 'b', 'c', 'd', 'e']
    const value = 'c'
    const result = nextElementInList(list, value)
    expect(result).toBe('d')
  })

  describe('when element is on end of list', () => {
    it('locatet last element at start of the list', () => {
      const list = ['a', 'b', 'c', 'd', 'e']
      const value = 'e'
      const result = nextElementInList(list, value)
      expect(result).toBe('a')
    })
  })
})
