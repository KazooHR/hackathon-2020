import React, { useState } from "react";
import { Card, Button, Header, Text, Flex, Spacer, TextArea, PageLayout, PageLayoutContent, FlexChild, Grid, GridItem } from "@kazoohr/confetti";
import { Rating } from "@material-ui/lab";

export interface PopUpFeedbackProps {
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

    return (
                <Card style={{'text-align': "center", width: "604px", borderRadius: "10px"}}>
                    <GridItem xl={24}>
                        <Spacer size="medium" orientation="vertical" />
                        <Header level="3" size="h5">{feedback.action}</Header>
                        <Spacer size="medium" orientation="vertical" />
                        <Header level="1" size="h2">{feedback.subject}</Header>
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
                            onChange={(comment: string) => setComment(comment)}/>)}
                        <Spacer size="small" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Text style={{color: "#666666"}}><i>{"Your feedback is shared with Neha anonymously."}</i></Text>
                        <Spacer size="large" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Button onClick={null} variant="destructive">
                            Submit Feedback
                        </Button>
                        <Spacer size="medium" orientation="vertical" />
                    </GridItem>
                    <GridItem xl={24}>
                        <Button onClick={null} variant="system">
                            Remind me later
                        </Button>
                    </GridItem>
                </Card>
)
}
