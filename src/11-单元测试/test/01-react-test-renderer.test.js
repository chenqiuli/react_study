import ShallowRender from "react-test-renderer/shallow"; // 浅层  
import App from "../App";
// import ReactTestUtil from "react-dom/test-utils";


describe("react-test-renderer", function () {
  it("h1标签", function () {
    const render = new ShallowRender();
    render.render(<App />);
    // console.log(render.getRenderOutput().props.children[0].props.children);
    expect(render.getRenderOutput().props.children[0].type).toBe("h1");
    expect(render.getRenderOutput().props.children[0].props.children).toBe("Todolist的单元测试");
  });



});

