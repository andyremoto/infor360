import { Amplify } from 'aws-amplify'
import amplifyConfig from '../amplify-config'

export default defineNuxtPlugin(() => {
  // Configure Amplify for client-side
  if (process.client) {
    Amplify.configure(amplifyConfig)
  }

  return {
    provide: {
      amplify: Amplify
    }
  }
})