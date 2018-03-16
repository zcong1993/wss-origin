import { ServerOptions, Server } from 'ws'

declare class WssOrigin extends Server {
  constructor(options?: ServerOptions, origins?: string[], cb?: () => void)
}

export = WssOrigin
