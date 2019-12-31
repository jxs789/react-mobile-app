import React, { Component, Fragment } from "react";
import { Select, Form, Input, Button, Upload ,Icon} from "antd";

import '../App.css'

const { Option } = Select;



class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexlist: [
        {
          title: "男",
          id: 0
        },
        {
          title: "女",
          id: 1
        }
      ],
      partyList: [
        {
          title: "党员",
          id: 0
        },
        {
          title: "群众",
          id: 1
        }
      ]
    };
  }
  renderSelect = list => (
    <Select style={{ width: 120 }}>
      {list.map((item, index) => {
        return (
          <Option key={index} value={item.title}>
            {item.title}
          </Option>
        );
      })}
    </Select>
  );

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      console.log(values, "454545");
    });
  };
  // onChange=(info) =>{
  //   if (info.file.status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === 'done') {
  //     message.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === 'error') {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // }
  miChange(info) {
    console.log(info,'4444444444444')
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    // if (info.file.status === 'done') {
    //   item.filePath += info.file.response.result + ','
    //   if (item.filePath.indexOf("null") != -1) {
    //     item.filePath = item.filePath.substring(4, item.filePath.length)
    //     console.log(item.filePath)
    //   }
    //   item.isUploadKey="1"
    //   // //  item.filePath[index]={filePath:info.file.response.result}
    //   //   console.log( item.filePath[ind])
    //   // message.success(`${info.file.name} file uploaded successfully`);
    // } else if (info.file.status === 'error') {
    //   // message.error(`${info.file.name} file upload failed.`);
    // }
  }

  render() {
    const { sexlist, partyList } = this.state;
    const { getFieldDecorator } = this.props.form;
    // console.log(sexlist[0].title)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          性别：
          {getFieldDecorator("sex")(<>{this.renderSelect(sexlist || [])}</>)}
        </Form.Item>
        <Form.Item>
          党员：
          {getFieldDecorator("party", {
            // rules: [{ required: true, message: "Please input your username!" }]
          })(<>{this.renderSelect(partyList || [])}</>)}
        </Form.Item>
        <Form.Item>
          类型：
          {getFieldDecorator("home", {
            initialValue: sexlist && sexlist[0].title
          })(
            <Select style={{ width: 120 }}>
              {sexlist.map((item, index) => {
                return (
                  <Option key={index} value={item.title}>
                    {item.title}
                  </Option>
                );
              })}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>

        <Upload   onChange={(e) => this.miChange(e)}>
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
      </Form>
    );
  }
}

export default Form.create()(home);
