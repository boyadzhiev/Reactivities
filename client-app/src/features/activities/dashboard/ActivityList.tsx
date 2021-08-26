import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(acivity => (
                    <Item key={acivity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{acivity.title}</Item.Header>
                            <Item.Meta>{acivity.date}</Item.Meta>
                            <Item.Description>
                                <div>{acivity.description}</div>
                                <div>{acivity.city}, {acivity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(acivity.id)} floated='right' content='View' color="blue" />
                                <Button onClick={() => deleteActivity(acivity.id)} floated='right' content='Delete' color="red" />
                                <Label basic content={acivity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}