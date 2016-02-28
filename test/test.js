import React from 'react'
import TestUtils from 'react-addons-test-utils'
import App from '../components/App'
import assert from 'power-assert'

function setup() {
    let props = {}
    let renderer = TestUtils.createRenderer()
    renderer.render(<App {...props} />)
    let output = renderer.getRenderOutput()

    return {
        props,
        output,
        renderer
    }
}

describe("App", () => {
    const { output } = setup()

    it("outputとしてdivが返ってくること", () => {
        assert(output.type === 'div')
    })
})
