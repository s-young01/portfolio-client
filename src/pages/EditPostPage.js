import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { MdPlaylistAddCheck } from "react-icons/md";
import './WritePage.scss';
import axios from 'axios';
import { API_URL } from '../config/config';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getCookie } from '../utill/cookie';
import { ImImages } from "react-icons/im";

const EditPostPage = ({isButtonTrue, data}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        isButtonTrue();
    },[isButtonTrue]);

    console.log(data);

    // 글 수정 상태관리
    const [isEditData, setEditData] = useState({
        title: `${data.p_title}`,
        content: `${data.p_content}`,
        writer: getCookie('usernickname')
    });

    // change 이벤트
    const onChange = (e) => {
        const {name, value} = e.target;
        setEditData({
            ...isEditData,
            [name]: value
        });
    }

    // input의 type이 file인 input이 change됐을 때
    // 변경된 파일을 서버로 업로드 전송하기
    const onChangeImg = (e) => {
        const { name } = e.target;
        // 폼 태그 생성하기
        const imgFormData = new FormData();
        // 폼 태그 데이터 추가하기
        imgFormData.append('file', e.target.files[0]);
        // 전송하기
        axios.post(`${API_URL}/upload`, imgFormData, {
            headers: {'Content-Type': 'multipart/formdata'}
        })
        .then(res => {
            setEditData({
                ...isEditData,
                [name]: res.data.imgUrl
            });
        })
        .catch(e => console.log(e))
    }

    // 완료 버튼 클릭시 포스트 전송 메뉴가 나오게 만들기
    const [isMenu, setIsMenu] = useState(false);

     // 완료버튼 눌렀을 때
     const click_Complate = () => {
        // 여기도 제목이 빈문자열이면 알림창
        if(isEditData.title === '') {
            alert('제목을 입력해주세요.');
            setIsMenu(false);
        }else {
            setIsMenu(true);
        }
    }
    // 취소버튼 눌렀을 때
    const click_Cancel = () => {
        setIsMenu(false);
    }

    // 전송 이벤트
    const onSubmit = () => {
        axios.patch(`${API_URL}/modifypost`, isEditData)
        .then(res => {
            console.log(res);
            alert('수정되었습니다.');
            navigate(`/post/${isEditData.writer}`)
        })
        .catch(e => console.log(e));
    }

    // 나가기 버튼 눌렀을 때
    const useConfirm = (message=null, onConfirm, onCancel) => {
        if(!onConfirm || typeof onConfirm !== 'function') {
            return;
        }
        if(onCancel && typeof onCancel !== 'function') {
            return;
        }
        const confirmAction = () => {
            if(window.confirm(message)) {
                onConfirm();
            }else {
                onCancel();
            }
        }
        return confirmAction;
    }
    const goConfirm = () => navigate(-1);
    const cancleConfirm = () => null;
    return (
        <div className='write'>
            <Header/>
            <div className='write_zone'>
                <div className='inner2'>
                    <input className='title_input' type='text' name='title'
                    placeholder='제목을 입력하세요' value={isEditData.title} onChange={onChange}/>
                    <CKEditor
                        editor={ ClassicEditor }
                        data=""
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setEditData({
                                ...isEditData,
                                content: data
                            });
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                </div>
            </div>
            <div className='footer'>
                <nav className='inner'>
                    <Link to='http://speller.cs.pusan.ac.kr/'>
                        <span>맞춤법 검사하기</span>
                        <MdPlaylistAddCheck className='check_icon'/>
                    </Link>
                    <div className='write_btn'>
                        <button className='complate' onClick={click_Complate}>완료</button>
                        <button onClick={useConfirm('변경사항이 저장되지 않을 수도 있습니다. 정말 나가시겠습니까?',
                        goConfirm, cancleConfirm)} 
                        className='exit_btn'>나가기</button>
                    </div>
                </nav>
            </div>
            <div className={isMenu ? 'open_menu' : 'close_menu'}>
                <div className='submit_list inner2'>
                    <div className='post_info'>
                        <nav className='title_info'>
                            <span className='space_sp'>|</span>
                            <span>제목</span>
                            <p>{isEditData.title}</p>
                        </nav>
                        <nav className='able_info'>
                            <span className='space_sp'>|</span>
                            <span>공개여부</span>
                            <div className='check_zone'>
                                공개 <input type='radio' className='open' name='able' checked/>
                                비공개 <input type='radio' className='close' name='able'/>
                            </div>
                        </nav>
                        <nav className='submit_btn'>
                            <button onClick={onSubmit} className='submit'>등록하기</button>
                            <button className='cancle' onClick={click_Cancel}>취소</button>
                        </nav>
                    </div>
                    <div className='reper_img'>
                        <nav>
                            <span className='space_sp'>|</span>
                            <span>대표 이미지 추가</span>
                        </nav>
                        <div className='addimg_box'>
                            <ImImages className='img_icon'/>
                        </div>
                        <nav className='upload_zone'>
                            <input className='upload_input' value='첨부파일' placeholder='첨부파일'/>
                            <label for='file' name='img' onChange={onChangeImg}>파일찾기</label> 
                            <input type='file' id='file'/>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPostPage;