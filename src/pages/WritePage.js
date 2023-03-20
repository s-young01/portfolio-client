import React, { useEffect, useState } from 'react';
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

const WritePage = ({isButtonTrue}) => {
    const usernickname = getCookie('usernickname');
    const navigate = useNavigate();
    useEffect(()=>{
        isButtonTrue();
    },[isButtonTrue]);

    // 글 등록 상태관리
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        img: '',
        writer: getCookie('usernickname')
    });

    // change 이벤트 
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
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
            setFormData({
                ...formData,
                [name]: res.data.imgUrl
            });
        })
        .catch(e => console.log(e))
    }

    // 폼 전송 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.title === '' ) {
            alert('제목을 입력해주세요.');
            // document.querySelector('.title_input').placeholder.color = 'red';
        }else {
            axios.post(`${API_URL}/postUpdate`, formData)
            .then(res => {
                alert('등록되었습니다.');
                navigate(`/posts/${usernickname}`);
            })
            .catch(e => console.log(e));
        }
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
    const goConfirm = () => navigate('/posts');
    const cancleConfirm = () => null;

    // 완료 버튼 클릭시 포스트 전송 메뉴가 나오게 만들기
    const [isMenu, setIsMenu] = useState(false);

    // 완료버튼 눌렀을 때
    const click_Complate = () => {
        setIsMenu(true);
    }
    // 취소버튼 눌렀을 때
    const click_Cancel = () => {
        setIsMenu(false);
    }
    
    return (
        <div className='write'>
            <Header/>
            <div className='write_zone'>
                <div className='inner2'>
                    <input className='title_input' type='text' name='title'
                    placeholder='제목을 입력하세요' value={formData.title} onChange={onChange}/>
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
                            setFormData({
                                ...formData,
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
                        <button onClick={useConfirm('작성중인 글이 저장되지 않을 수도 있습니다. 정말 나가시겠습니까?',
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
                        </nav>
                        <nav className='able_info'>
                            <span className='space_sp'>|</span>
                            <span>공개여부</span>
                            <div>
                                <input type='checkbox' name='able' value='공개'/>
                                <input type='checkbox' name='able' value='비공개'/>
                            </div>
                        </nav>
                        <nav className='submit_btn'>
                            <button onClick={onSubmit}>등록하기</button>
                            <button className='cancle' onClick={click_Cancel}>취소</button>
                        </nav>
                    </div>
                    <div className='reper_img'>
                        <nav>
                            <span className='space_sp'>|</span>
                            <span>대표 이미지 추가</span>
                        </nav>
                        <div className='addimg_box'>
                            {formData.img ? <img src={`${API_URL}/upload/${formData.img}`}/>
                            : <ImImages className='img_icon'/> }
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

export default WritePage;