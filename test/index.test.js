const Websocket = require('ws')
const WssOrigin = require('../')

const allowedOrigin = 'test.com'

it('should works', () => {
  const PORT = 9999
  const wss = new WssOrigin({
    port: PORT
  }, [allowedOrigin], () => {
    const ws = new Websocket(`ws://localhost:${PORT}`, {
      origin: allowedOrigin
    })
    const mockFn = jest.fn()
    ws.on('open', mockFn)
    setTimeout(() => {
      expect(mockFn).toBeCalled()
      wss.close()
    }, 1000)
  })
})

it('should not works', () => {
  const PORT = 9998
  const wss = new WssOrigin({
    port: PORT
  }, [allowedOrigin], () => {
    const ws = new Websocket(`ws://localhost:${PORT}`)
    const mockFn = jest.fn()
    ws.on('error', mockFn)
    setTimeout(() => {
      expect(mockFn).toBeCalled()
      wss.close()
    }, 1000)
  })
})
