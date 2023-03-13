import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  const rendermMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  it('displays company name', () => {
    rendermMainNav()
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('display menu item for navigation', () => {
    rendermMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuText = navigationMenuItems.map(
      (item) => item.textContent
    )
    expect(navigationMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logg in', () => {
    it('displays user profile picture', async () => {
      rendermMainNav()

      let profileImage = screen.queryByRole('img', {
        name: /profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
