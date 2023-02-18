import {useEffect, useState} from "react"
import {message, Upload} from "antd"
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons"

import {ImageWrapper, StyledImg, Wrapper, WrapperDefault,} from "./image-upload.e"
import {useUploadFile} from "hooks";

function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result))
    reader.readAsDataURL(img)
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
    if (!isJpgOrPng) message.error("You can only upload images file!")
    return isJpgOrPng
}

const ImageUpload = ({
                         onSetImage,
                         url,
                         forEdit,
                         imgLoading,
                         isCreate = false,
                         ...args
                     }) => {
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState(url)

    const uploadFile = useUploadFile({
        onSuccess: () => {
            console.log("success")
        },
        onError: (err) => {
            console.log("err", err)
        },
    })

    const uploadButton = (
        <WrapperDefault>
            {
                (
                    isCreate ?
                        ((!isCreate || uploadFile?.isLoading) && imgLoading)
                        :
                        (uploadFile?.isLoading || imgLoading)
                )
                    ?
                    <LoadingOutlined/>
                    :
                    <PlusOutlined/>
            }
            <div style={{marginTop: 8}}>Upload</div>
        </WrapperDefault>
    )

    const handleChange = (info) => {
        const formData = new FormData()
        if (info.file.status === "uploading") {
            return
        }
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, (imageUrl) => {

                setImageUrl(imageUrl)
                setLoading(true)
            })
            formData.append("file", info.file.originFileObj)
            uploadFile.mutate(formData)
        }
    }

    const dummyRequest = ({file, onSuccess}) => {
        setTimeout(() => {
            onSuccess("ok")
        }, 0)
    }

    useEffect(() => {
        if (!!uploadFile?.data) {
            onSetImage(uploadFile?.data?.data?.result?.url)
        }
    }, [uploadFile])

    return (
        <Wrapper {...args}>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                customRequest={dummyRequest}
                disabled={!forEdit}
                accept="image/*"
            >
                <ImageWrapper forEdit={forEdit}>
                    {((imageUrl || url) && !imgLoading && !uploadFile?.isLoading) ? (
                        <StyledImg src={loading ? imageUrl : url} alt="avatar" height="100px"/>
                    ) : (
                        uploadButton
                    )}
                </ImageWrapper>
            </Upload>
        </Wrapper>
    )
}

export default ImageUpload
