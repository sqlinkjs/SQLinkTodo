import moment from 'moment';
import { ITaskItem } from '../../App';
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, StackDivider, Text } from '@chakra-ui/react'
interface ITaskListItem {
    data: ITaskItem
}

function TododItem(props: ITaskListItem) {
    return (
        <div style={{ margin: '10px' }}>
            <Card>
                <CardBody>
                    <Stack gap={'4'}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Text fontSize={"large"} style={{ textAlign: "start" }}>{props.data.task_title}</Text>
                            <Stack gap={'2'}>
                    
                            </Stack>
                        </div>
                        <div>
                            <Text fontSize='sm' style={{ textAlign: "start" }}>
                                {props.data.task_description}
                            </Text>
                        </div>
                        <div>
                            <Text fontSize='sm' style={{ textAlign: "start" }}>
                                {moment(props.data.created_at).format("DD MMM YYYY hh:mm A")}&nbsp;•&nbsp;{props.data.task_status}
                            </Text>
                        </div>

                    </Stack>
                </CardBody>
            </Card>
        </div>
    )
}

export default TododItem