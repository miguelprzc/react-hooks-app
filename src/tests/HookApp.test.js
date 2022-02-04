import { HookApp } from "../HookApp";

describe('Tests on <HookApp />', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
  ;
});
