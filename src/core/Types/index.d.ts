namespace Application {
    type Config = {
        name: string
        port: number
    }
}

namespace Routing {
    type Method = ('GET' | 'POST'  | 'PUT' | 'PATCH' | 'DELETE')

    type Route = {
        path: string,
        name?: string,
        method: Routing.Method,
        controller: string,
        action: string,
    }

    type ContainerDI = {
        [key: string]: Interfaces.Injectable
    }

    type ErrorResponse = {
        code: number,
        error: {
            message: string,
            callstack?: string[]
        }
    }
}