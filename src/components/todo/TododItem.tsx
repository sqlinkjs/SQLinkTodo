import moment from 'moment';
import { ITaskItem } from '../../App';
import { Badge, Card, CardBody, Checkbox, Radio, RadioGroup, Stack, Text, Tooltip } from '@chakra-ui/react';
import DeleteLogo from "./../../assets/delete.svg";
import EditLogo from "./../../assets/edit.svg";

interface ITaskListItem {
    data: ITaskItem
    onDeleteItem: (data: ITaskItem) => void;
    onUpdateItem: (data: ITaskItem) => void;
    handleToggleStatus: (data:ITaskItem) => void;
}


function TododItem(props: ITaskListItem) {

    return (
        <div style={{ margin: '10px' }}>
            <Card style={{ backgroundColor: '#F0F0F0' }}>
                <CardBody>
                    <Stack gap={'4'}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: "10px", alignItems: "center" }}>
                                <Text fontSize={"large"} style={{ textAlign: "start", fontWeight: 'bold' }}>{props.data.task_title}</Text>
                                {
                                    props.data.task_status != "pending" ? <Badge colorScheme='green'>Completed</Badge>
                                        : <Badge colorScheme='red'>Pending</Badge>

                                }
                            </div>
                            <Stack gap={'5'} direction={"row"}>
                                <Tooltip label='Edit task' fontSize='md'>
                                    <img src={EditLogo} style={{ cursor: 'pointer' }} onClick={() => props.onUpdateItem(props.data)} />
                                </Tooltip>
                                <Tooltip label='Delete task' fontSize='md'>
                                    <img src={DeleteLogo} style={{ cursor: 'pointer' }} onClick={() => props.onDeleteItem(props.data)} />
                                </Tooltip>
                            </Stack>
                        </div>
                        <div>
                            <Text fontSize='sm' style={{ textAlign: "start" }}>
                                {props.data.task_description}
                            </Text>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text fontSize='sm' style={{ textAlign: "start" }}>
                                {moment(props.data.created_at).format("DD MMM YYYY hh:mm A")}
                            </Text>
                            <div>

                            </div>
                        </div>
                        <div>
                            <RadioGroup onChange={() => props.handleToggleStatus(props.data)} value={props.data.task_status}>
                                <Stack direction='row'>
                                    <Radio value='completed'>Completed</Radio>
                                    <Radio value='pending'>Pending</Radio>
                                </Stack>
                            </RadioGroup>
                        </div>
                    </Stack>
                </CardBody>
            </Card>
        </div>
    )
}

export default TododItem