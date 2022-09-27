import { observer } from 'mobx-react-lite'
import { Form, Space, Button } from '@douyinfe/semi-ui';
import edit from 'store/edit'
import './Edit.scss'

function diffCom({ type, label }, index) {
  let Com = '';
  let _label = `${index + 1}、${label}`;
  let _key = `${label}-${index}`;
  switch (type) {
    case 'input':
      Com = <Form.Input key={_key} field={label} label={_label} placeholder={label}></Form.Input>
      break;
    case 'input-pwd':
      Com = <Form.Input key={_key} field={label} label={_label} placeholder={label}></Form.Input>
      break;
    case 'select':
      Com = (
        <Form.Select key={_key} field={label} label={_label} placeholder={label}>
          <Form.Select.Option value="operate">运营</Form.Select.Option>
          <Form.Select.Option value="rd">开发</Form.Select.Option>
        </Form.Select>
      )
      break;
    default:
      break;
  }
  return Com
}

const Edit = observer(() => {

  function handleSubmit(values) {
    console.log(values)
  }
  return (
    <div className="site-edit">
      <Form onSubmit={values => handleSubmit(values)} style={{ width: 400 }}>
        <Form.Input field='title' noLabel placeholder="标题" />
        {
          edit.questionList.map((item, index) => {
            return diffCom(item, index)
          })
        }

        <Space>
          <Button type='primary' htmlType='submit' theme='solid'>确定</Button>
        </Space>
      </Form>
    </div>
  );
})


export default Edit;