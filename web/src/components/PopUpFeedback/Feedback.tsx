import React, { useState } from "react";
import { Card, Button, Header, Text, Spacer, TextArea, Grid, GridItem, Pill, Facepile, Flex } from "@kazoohr/confetti";
import { Rating } from "@material-ui/lab";
import { useMutation } from "@apollo/react-hooks";
import { SNOOZE_FEEDBACK } from "./helpers";
import { useToast } from "@kazoohr/confetti";


export interface PopUpFeedbackProps {
    id: string;
    action: string;
    subject: string;
    question: string;
    value: string;
    comment?: string;
    rating: number;
    snoozeCount: number;
}
export function PopUpFeedback({feedback}: {feedback: PopUpFeedbackProps}) {
    const [commentOpen, setCommentOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number>(2.5);
    const { error: showErrorToast, success: showSuccessToast } = useToast();


    const users = [{
        id: '5c8b4daf-12b1-4448-b975-dec084ed2888',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/shinze/128.jpg',
        image160: 'https://s3.amazonaws.com/uifaces/faces/twitter/lisovsky/128.jpg',
        image30: 'https://s3.amazonaws.com/uifaces/faces/twitter/salvafc/128.jpg',
        image70: 'https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg',
        initials: 'ABC',
        jobTitle: 'Regional Response Engineer',
        name: 'Webster Kling',
        primaryGroup: 'target',
        profileUrl: '#'
    }];
    const [snoozeFeedback] = useMutation(SNOOZE_FEEDBACK, {
        onCompleted: () => {
            showSuccessToast(`We'll remind you to rate ${feedback.subject} later!`);
        },
        onError: () => {
            showErrorToast("Error snoozing");
        }
    });

    return (
                <Card style={{'text-align': "center", width: "604px", borderRadius: "10px"}}>
                    <GridItem xl={24}>
                        <Spacer size="medium" orientation="vertical" />
                        <Header level="3" size="h5">{feedback.action}</Header>
                        <Spacer size="medium" orientation="vertical" />
                        <Flex justifyContent="space-around">
                            <Flex>
                                <Facepile users={users}  max={1} />
                                <Spacer size="small" orientation="horizontal" />
                                <Header level="1" size="h2">{feedback.subject}</Header>
                             </Flex>
                        </Flex>
                        <Spacer size="medium" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Header level="3"
                              size="h3">{feedback.question}{" "}<b>{feedback.value}</b>{"?"}</Header>
                        <Spacer size="large" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Rating style={{fontSize: "64px", color: "#2A5CDB"}} name="half-rating" defaultValue={rating} precision={0.5} size="large"
                                onChangeActive={(event: object, value: number) => setRating(value)} />
                        <Grid>
                        <Spacer size="large" orientation="horizontal" />
                        <Spacer size="small" orientation="horizontal" />
                        <GridItem width={6}>
                            <span style={{color: "#666666"}}>
                                <Pill
                                    avatarUser={null}
                                    icon={undefined}
                                    onClick={null}
                                    onClose={null}
                                    size="small"
                                    text="could use work"
                                    variant="primary"
                                />
                            </span>
                            </GridItem>
                        <Spacer size="large" orientation="horizontal" />
                        <GridItem width={6}>
                          <span style={{color: "#666666"}}>
                                <Pill
                                    avatarUser={null}
                                    icon={undefined}
                                    onClick={null}
                                    onClose={null}
                                    size="small"
                                    text="part of our success"
                                    variant="primary"/>
                          </span>
                            </GridItem>
                            <Spacer size="large" orientation="horizontal" />
                            <GridItem width={6}>
                            <span style={{color: "#666666"}}>

                            <Pill
                                avatarUser={null}
                                icon={undefined}
                                onClick={null}
                                onClose={null}
                                size="small"
                                text="key to our success"
                                variant="primary"/>
                            </span>
                            </GridItem>
                            </Grid>

                        <Spacer size="large" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        {!commentOpen &&
                        (<Button onClick={() => setCommentOpen(true)} variant="system">
                            Add a comment (optional)
                        </Button>)}
                    </GridItem>
                    <GridItem xl={24}>
                        {commentOpen && (<TextArea
                            error=""
                            maxLength={-1}
                            minRows={-1}
                            onMention={null}
                            optionalLabelText="(optional)"
                            placeholder={`let ${feedback.subject} know why you chose this rating`}
                            speechBubble={false}
                            value={comment}
                            onChange={(comment: string) => setComment(comment)}
                            active
                            />
                            )}
                        <Spacer size="small" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Text><span style={{color: "#666666"}}><i>{"Your feedback is shared with Neha anonymously."}</i></span></Text>
                        <Spacer size="large" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Button onClick={null} variant="destructive">
                            Submit Feedback
                        </Button>
                        <Spacer size="medium" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Button onClick={() => {
                            // snoozeFeedback(feedback.id)
                        }} variant="system">
                            Remind me later
                        </Button>
                    </GridItem>
                </Card>)
}
