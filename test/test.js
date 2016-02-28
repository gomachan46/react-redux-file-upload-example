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

    describe("div内", () => {
        const h1 = output.props.children

        it("要素としてh1が返ってくること", () => {
            assert(h1.type === 'h1')
        })

        describe("h1内", () => {
            const h1Content = h1.props.children

            it("要素としてh1が返ってくること", () => {
                assert(h1Content === 'Test')
            })
        })
    })
})
