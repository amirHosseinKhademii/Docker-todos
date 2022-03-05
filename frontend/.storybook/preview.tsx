import '../src/styles/index.css'
import '@storybook/addon-actions/register'
import '@storybook/addon-console'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'
import { UiProvider } from '../src/provider/ui-provider'
import { RecoilRoot } from 'recoil'

export const decorators = [
  (Story) => (
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/']}>
        <UiProvider>
          <RecoilRoot>
            <Story />
          </RecoilRoot>
        </UiProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
