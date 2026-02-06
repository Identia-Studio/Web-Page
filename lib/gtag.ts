export const pageview = (url: string) => {
  window?.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
    page_path: url,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const event = ({ action, params }: { action: string; params: any }) => {
  window?.gtag('event', action, params)
}
