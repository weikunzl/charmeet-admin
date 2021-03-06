<?php
/*********************/
/*                   */
/*  Version : 5.1.0  */
/*  Author  : RM     */
/*  Comment : 071223 */
/*                   */
/*********************/

if ( !defined( "IN_OESOFT" ) )
{
    exit( "Access Denied" );
}
class control extends wapbase
{

    private $service = NULL;
    private $_tplfile = NULL;

    private function _new( )
    {
        $this->service = parent::service( "passport", "ws" );
    }

    private function _unset( )
    {
        unset( $this->service );
    }

    public function control_run( )
    {
    }

    public function control_login( )
    {
        $this->_new( );
        $forward = $this->service->validForward( );
        $this->_unset( );
        $this->getMeta( "ch_login" );
        $var_array = array(
            "page_title" => $this->metawrap['title'],
            "page_keyword" => $this->metawrap['keyword'],
            "page_description" => $this->metawrap['description'],
            "forward" => urlencode( $forward )
        );
        $this->_tplfile = $this->getTPLFile( "passport_login" );
        TPL::assign( $var_array );
        TPL::display( $this->_tplfile );
    }

    public function control_loginpost( )
    {
        $this->_new( );
        list( $loginname, $password ) = $this->service->validLogin( );
        $forward = $this->service->validForward( );
        $this->_unset( );
        $uc_model = parent::model( "uc", "im" );
        $uc_model->inteLogin( $loginname, $password );
        $model = parent::model( "passport", "im" );
        $result = $model->doLogin( $loginname, $password );
        unset( $model );
        if ( $result == 1 )
        {
            XHandle::wapHalt( "对不起，该帐号处于锁定状态！", "", 1 );
        }
        else if ( $result == 2 )
        {
            XHandle::wapHalt( "登录失败，帐号或者密码错误！", "", 1 );
        }
        else if ( $result == 3 )
        {
            if ( TRUE === $uc_model->uc_Integration && $uc_model->ucinfo[0] == "-1" )
            {
                $uc_model->inteLoginReg( $loginname, $password );
            }
            if ( TRUE === $uc_model->uc_Integration && $uc_model->ucinfo[0] == "-2" )
            {
                $uc_model->inteEditPassword( $loginname, $password );
            }
            if ( !empty( $forward ) )
            {
                XHandle::wapHalt( "登录成功", $forward, 0 );
            }
            else
            {
                XHandle::wapHalt( "登录成功", $this->wapfile, 0 );
            }
        }
        else
        {
            XHandle::wapHalt( "登录错误，请联系网站管理员！", "", 1 );
        }
        unset( $uc_model );
    }

    public function control_logout( )
    {
        $model = parent::model( "passport", "im" );
        $model->logout( );
        unset( $model );
        $uc_model = parent::model( "uc", "im" );
        $uc_model->inteLogout( );
        unset( $uc_model );
        XHandle::wapHalt( "退出成功", $this->wapfile, 0 );
    }

    public function control_reg( )
    {
        $this->getMeta( "ch_reg_step1" );
        $var_array = array(
            "page_title" => $this->metawrap['title'],
            "page_keyword" => $this->metawrap['keyword'],
            "page_description" => $this->metawrap['description']
        );
        $this->_tplfile = $this->getTPLFile( "passport_reg" );
        TPL::assign( $var_array );
        TPL::display( $this->_tplfile );
    }

    public function control_reg1( )
    {
        $this->_new( );
        $args = $this->service->validReg1( );
        $this->_unset( );
        $this->getMeta( "ch_reg_step1" );
        $var_array = array(
            "page_title" => $this->metawrap['title'],
            "page_keyword" => $this->metawrap['keyword'],
            "page_description" => $this->metawrap['description'],
            "args" => $args
        );
        $this->_tplfile = $this->getTPLFile( "passport_reg_city" );
        TPL::assign( $var_array );
        TPL::display( $this->_tplfile );
    }

    public function control_regpost( )
    {
        $this->_new( );
        list( $main_args, $profile_args, $contact_args, $params_arags ) = $this->service->validRegPost( );
        $this->_unset( );
        $uc_model = parent::model( "uc", "im" );
        $uc_result = $uc_model->inteReg( $main_args['username'], $main_args['password'], $main_args['email'] );
        if ( $uc_result < 0 )
        {
            XHandle::wapHalt( "注册失败，UC已经存在该用户或者UC用户名格式不正确！", "", 1 );
        }
        unset( $uc_model );
        $model = parent::model( "passport", "im" );
        $result = $model->doReg( $main_args, $profile_args, $contact_args, $params_arags );
        unset( $model );
        if ( TRUE === $result )
        {
            XHandle::wapHalt( "恭喜你，注册成功", $this->wapfile."?c=passport&a=setmonolog", 0 );
        }
        else
        {
            XHandle::wapHalt( "对不起，会员注册失败！", "", 1 );
        }
    }

    public function control_setmonolog( )
    {
        $this->checkLogin( );
        if ( FALSE === $this->validRegTime( ) )
        {
            XHandle::redirect( $this->wapfile."?c=cp_info&a=monolog" );
        }
        $this->getMeta( "ch_reg_step2" );
        $var_array = array(
            "page_title" => $this->metawrap['title'],
            "page_keyword" => $this->metawrap['keyword'],
            "page_description" => $this->metawrap['description']
        );
        $this->_tplfile = $this->getTPLFile( "passport_monolog" );
        TPL::assign( $var_array );
        TPL::display( $this->_tplfile );
    }

    public function control_savemonolog( )
    {
        $this->checkLogin( );
        if ( FALSE === $this->validRegTime( ) )
        {
            XHandle::redirect( $this->wapfile."?c=cp_info&a=monolog" );
        }
        $this->_new( );
        $content = $this->service->validMonolog( );
        $this->_unset( );
        $model = parent::model( "passport", "im" );
        $result = $model->doSaveMonolog( parent::$wrap_user['userid'], $content );
        unset( $model );
        XHandle::wapHalt( "内心独白设置成功", $this->wapfile."?c=passport&a=avatar", 0 );
    }

    public function control_avatar( )
    {
        $this->checkLogin( );
        if ( FALSE === $this->validRegTime( ) )
        {
            XHandle::redirect( $this->wapfile."?c=cp_info&a=avatar" );
        }
        $this->getMeta( "ch_reg_step3" );
        $var_array = array(
            "page_title" => $this->metawrap['title'],
            "page_keyword" => $this->metawrap['keyword'],
            "page_description" => $this->metawrap['description']
        );
        $this->_tplfile = $this->getTPLFile( "passport_avatar" );
        TPL::assign( $var_array );
        TPL::display( $this->_tplfile );
    }

    public function control_saveavatar( )
    {
        $this->checkLogin( );
        if ( FALSE === $this->validRegTime( ) )
        {
            XHandle::redirect( $this->wapfile."?c=cp_info&a=avatar" );
        }
        $this->_new( );
        $uploadpart = $this->service->validAvatar( );
        $this->_unset( );
        $model_upload = parent::model( "upload", "am" );
        $data = $model_upload->doSaveUpload( $uploadpart, "avatar", "avatar", parent::$wrap_user['userid'] );
        unset( $model_upload );
        if ( is_array( $data ) )
        {
            $model = parent::model( "passport", "wm" );
            $model->doSaveAvatar( $data['thumbfiles'] );
            unset( $model );
            XHandle::wapHalt( "形象照上传成功", $this->wapfile, 0 );
        }
        else
        {
            XHandle::wapHalt( "对不起，照片上传失败", "", 1 );
        }
    }

}

?>
